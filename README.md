# DeFi Forge – Activity Table Assessment

This project extends the existing DeFi Forge interface by adding a responsive and filterable **Activity Table** component to display mock transaction data related to DeFi actions such as staking, borrowing, and lending.

## ✨ Features

- Responsive **transaction table** with paginate
- Filter by transaction type: **Stake**, **Borrow**, **Lend**
- **Hover effects** for better interactivity
- Clean UI using **Tailwind CSS**
- Built with **Next.js App Router**

## 📁 Folder Structure

components/
transaction/
├── ActivityTable.tsx # Main table component
├── FilterBar.tsx # Filter buttons
└── types.ts # Shared type definitions

data/
└── mockTransactions.ts # Static transaction data


## 🧪 How to Run

1. Install dependencies:

```bash
npm install
npm run dev
