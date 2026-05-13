# 🏍️ Biz Manager
> **Gestão de Logística e Rentabilidade para Agentes de Microcrédito.**

O **Biz Manager** é um sistema desenvolvido para otimizar a rotina de campo de agentes de microcrédito que utilizam veículo próprio para o trabalho. O foco principal é a gestão do auxílio-combustível fixo, controle de quilometragem e manutenção preventiva.

---

## 📋 Contexto do Projeto
Muitos agentes de microcrédito recebem um valor fixo de auxílio combustível (ex: R$ 827,00). Sem um controle rigoroso, é difícil mensurar a real lucratividade do benefício após os gastos com gasolina e manutenção. Este app resolve esse problema centralizando os lançamentos e gerando insights em tempo real.

## 🚀 Funcionalidades
- **Dashboard Financeiro:** Comparativo em tempo real entre o auxílio recebido e os gastos com combustível.
- **Controle de KM:** Registro de quilometragem inicial e final para monitoramento de rotas.
- **Gestão de Abastecimento:** Lançamento de valores e litragem para cálculo de consumo médio.
- **Alertas de Manutenção:** Notificações inteligentes baseadas na rodagem (troca de óleo a cada 1.000km, pneus e freios).
- **Histórico de Atuação:** Registro de bairros e setores atendidos por data.

## 🛠️ Tecnologias Utilizadas
O projeto utiliza uma stack moderna e escalável, focada em performance e experiência mobile-first:

*   **Frontend:** [React.js](https://reactjs.org/) com [Vite](https://vitejs.dev/) (Build tool ultra-rápida).
*   **Estilização:** [Tailwind CSS 4.0](https://tailwindcss.com/) (Utilitários CSS para design responsivo).
*   **Backend as a Service (BaaS):** [Firebase](https://firebase.google.com/) (Autenticação e Banco de Dados).
*   **Banco de Dados:** [Cloud Firestore](https://firebase.google.com/docs/firestore) (Banco NoSQL em tempo real).
*   **Versionamento:** [Git](https://git-scm.com/) e [GitHub](https://github.com/).

## 📐 Arquitetura do Sistema
- **Mobile-First:** Interface projetada para ser utilizada na rua, com inputs de fácil acesso.
- **Real-time Data:** Sincronização em tempo real com o banco de dados via listeners (onSnapshot).
- **Componentização:** UI baseada em componentes reutilizáveis para facilitar a manutenção.

## 🔧 Como rodar o projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/biz-manager.git

2. Instale as dependencias
<code>
npm install
</code>

3. Configure as variáveis do Firebase em src/services/firebase.js.

4. Inicie o servidor de desenvolvimento:
<code>
npm run dev
</code>
Desenvolvido por [Renison Ramos]
