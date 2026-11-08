# Guia de Configuração de Domínio Personalizado no GitHub Pages

Este guia contém os dados técnicos exatos para você apontar o domínio próprio (ex: `dinalvesadvogados.com.br` ou `dinalvesejoaopedro.adv.br`) para o GitHub Pages com certificado SSL (HTTPS) gratuito.

---

## 1. O Que Configurar na Zona de DNS (Onde você comprou o domínio)

No painel onde você registrou o domínio (Registro.br, Hostinger, GoDaddy, Cloudflare, etc.), acesse a área de **Gerenciamento de DNS** ou **Tabela de DNS** e adicione as seguintes entradas:

### A) 4 Registros do Tipo "A" (Para o domínio sem www)
Aponte o nome `@` (ou deixe em branco / domínio raiz) para os 4 IPs oficiais do GitHub Pages:

| Tipo | Nome / Host | Valor / Destino | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 3600 (1 hora) |
| **A** | `@` | `185.199.109.153` | 3600 (1 hora) |
| **A** | `@` | `185.199.110.153` | 3600 (1 hora) |
| **A** | `@` | `185.199.111.153` | 3600 (1 hora) |

---

### B) 1 Registro do Tipo "CNAME" (Para o domínio com www)
Aponte o subdomínio `www` para o seu endereço do GitHub:

| Tipo | Nome / Host | Valor / Destino | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `andreweua.github.io.` | 3600 (1 hora) |

*(Nota: Alguns provedores exigem o ponto final no final de `andreweua.github.io.`, outros não. Ambos funcionam).*

---

## 2. O Que Fazer no GitHub (Após Comprar o Domínio)

Quando você já tiver o nome do domínio em mãos:

1. Acesse o seu repositório:  
   👉 **[https://github.com/andreweua/dinalves-joaopedro-advogados/settings/pages](https://github.com/andreweua/dinalves-joaopedro-advogados/settings/pages)**
2. Na seção **Custom domain**:
   - Digite o seu domínio (exemplo: `www.dinalvesadvogados.com.br` ou `dinalvesadvogados.com.br`).
   - Clique em **Save**.
3. O GitHub criará automaticamente o arquivo `CNAME` no repositório e iniciará a checagem de DNS.
4. Assim que o DNS propagar, marque a caixinha **"Enforce HTTPS"** logo abaixo.  
   *(O GitHub gera o certificado de segurança SSL com cadeado verde gratuitamente).*

---

## 3. Ou Me Avise Aqui no Chat!

Assim que você comprar o domínio, basta me enviar o nome dele aqui (exemplo: `dinalvesadvogados.com.br`):
- Eu crio e committo o arquivo `CNAME` oficial diretamente no repositório para você.
- E já deixo os links de redirecionamento do WhatsApp e metatags canônicas atualizados!
