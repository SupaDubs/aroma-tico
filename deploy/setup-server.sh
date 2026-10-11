#!/usr/bin/env bash
# Instala nginx (solo en 127.0.0.1:8081) + Cloudflare Tunnel para servir Aroma Tico.
# Uso: TUNNEL_TOKEN='...' bash setup-server.sh      (Debian/Ubuntu)
set -euo pipefail
: "${TUNNEL_TOKEN:?Falta TUNNEL_TOKEN (token del túnel de Cloudflare)}"

REPO=https://github.com/SupaDubs/aroma-tico.git
SITE=/var/www/aroma-tico
PORT=8081

sudo apt-get update -y
sudo apt-get install -y nginx git curl

# sitio
if [ -d "$SITE/.git" ]; then sudo git -C "$SITE" pull --ff-only; else sudo git clone "$REPO" "$SITE"; fi

# nginx: solo escucha en localhost, no choca con otros servicios en 80/443
sudo tee /etc/nginx/sites-available/aroma-tico >/dev/null <<EOF
server {
    listen 127.0.0.1:$PORT;
    server_name _;
    root $SITE;
    index index.html;
    location / { try_files \$uri \$uri/ =404; }
    location ~ /\.(?!well-known) { deny all; }
    location = /CNAME { deny all; }
    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;
}
EOF
sudo ln -sf /etc/nginx/sites-available/aroma-tico /etc/nginx/sites-enabled/aroma-tico
sudo rm -f /etc/nginx/sites-enabled/default   # el default quiere el puerto 80, que ya usa otro servicio
sudo nginx -t
sudo systemctl enable --now nginx
sudo systemctl reload nginx

# comando de actualización
sudo tee /usr/local/bin/aroma-tico-update >/dev/null <<EOF
#!/usr/bin/env bash
git -C $SITE pull --ff-only
EOF
sudo chmod +x /usr/local/bin/aroma-tico-update

# cloudflared
if ! command -v cloudflared >/dev/null; then
  sudo mkdir -p --mode=0755 /usr/share/keyrings
  curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null
  echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list
  sudo apt-get update -y && sudo apt-get install -y cloudflared
fi
# si ya hay un servicio cloudflared de otro túnel, esto falla: ver README del script
sudo cloudflared service install "$TUNNEL_TOKEN"

echo; curl -fsI "http://127.0.0.1:$PORT/" | head -1
echo "Listo. Falta (en Cloudflare): Public hostname aroma-tico.kodexcr.com -> http://localhost:$PORT"
