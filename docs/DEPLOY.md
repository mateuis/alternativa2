# Como Publicar o Site Online (Deploy)

---

## ✅ Opção 1 — Netlify (Grátis, mais fácil)

1. Acesse [netlify.com](https://netlify.com) e crie uma conta gratuita
2. Na dashboard, clique em **"Add new site" → "Deploy manually"**
3. **Arraste a pasta `alternativa-perfeita/`** para a área indicada
4. Pronto! O site fica online em segundos com URL automática

> Domínio personalizado (ex: `alternativaperfeitaacademia.com.br`)
> pode ser configurado gratuitamente nas opções de domínio do Netlify.

---

## ✅ Opção 2 — GitHub Pages (Grátis)

1. Crie uma conta em [github.com](https://github.com)
2. Crie um repositório público chamado `alternativa-perfeita`
3. Faça upload de todos os arquivos
4. Vá em **Settings → Pages → Source: main branch**
5. O site ficará em `https://seu-usuario.github.io/alternativa-perfeita/`

---

## ✅ Opção 3 — Hospedagem Tradicional (cPanel)

1. Acesse o gerenciador de arquivos do seu cPanel/painel de hospedagem
2. Entre na pasta `public_html/`
3. Faça upload de todos os arquivos da pasta `alternativa-perfeita/`
   (ou descompacte o `.zip` diretamente pelo cPanel)
4. O site ficará no seu domínio principal

---

## 🌐 Domínio Personalizado

Para usar `www.alternativaperfeitaacademia.com.br`:

1. Compre o domínio em provedores como:
   - [Registro.br](https://registro.br) — domínios `.com.br`
   - [GoDaddy](https://godaddy.com)
   - [Hostinger](https://hostinger.com.br)
2. Aponte o DNS para o serviço de hospedagem escolhido
3. Configure o domínio no painel da hospedagem

---

## 🔒 HTTPS (SSL)

- **Netlify / GitHub Pages**: SSL gratuito automático ✅
- **Hospedagem tradicional**: ative o certificado Let's Encrypt no cPanel

---

## ⚠️ Observações

- O formulário de contato redireciona para o WhatsApp — não precisa de
  backend ou banco de dados
- O feed do Instagram é um grid estático — para feed dinâmico real,
  seria necessária a Instagram Graph API (requer aprovação do Meta)
- O mapa do Google Maps funciona melhor quando servido via HTTPS
