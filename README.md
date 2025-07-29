# Crego Tree Visualizer

 [![Vite](https://img.shields.io/badge/bundler-Vite-brightgreen)](https://vitejs.dev/)  [![React Flow](https://img.shields.io/badge/diagram-React%20Flow-blueviolet)](https://reactflow.dev/)

A Vite‑powered React application for visualizing hierarchical loan‑management entities in an auto‑layout tree.  
Users can add/delete **Account**, **Loan**, and **Collateral** nodes; the layout recalculates via Dagre. State is managed with Zustand and styling via Tailwind CSS.

---

## 🚀 Features

- **Auto‑layout** tree using React Flow + Dagre  
- Custom node components for **Account**, **Loan**, and **Collateral**  
- Sidebar panel to view node details, add allowed children, or delete  
- Unique IDs generated with `nanoid`  
- Fully styled with Tailwind CSS  
- Zero backend—pure frontend demo  

---

## 🛠️ Tech Stack

- **Framework**: React 18  
- **Bundler**: Vite  
- **Diagram**: React Flow v11 + Dagre  
- **State**: Zustand  
- **Styling**: Tailwind CSS  
- **IDs**: nanoid  

---

## 📦 Installation

Clone the repo  
   ```bash
   git clone https://github.com/mambafcuk/crego-tree-visualizer.git
   cd crego-tree-visualizer
   npm install
```
Start the dev server
```bash
npm run dev
```
Open your browser at http://localhost:5173

Vercel Link : https://crego-tree.vercel.app/


🎮 Usage
On first load, an Account root node is created automatically.

Click any node to open the sidebar:

Add Loan (only under Account)

Add Collateral (only under Loan)

Delete Node (removes all descendants)

The tree reflows top‑to‑bottom via Dagre after each change.
```
📂 Project Structure
arduino
Copy
Edit
crego-tree-visualizer/
├── src/
│   ├── main.jsx           # App entrypoint
│   ├── App.jsx            # Layout + auto‑add root logic
│   ├── store.js           # Zustand state & actions
│   ├── utils/
│   │   └── layout.js      # Dagre layout helper
│   ├── components/
│   │   ├── TreeVisualizer.jsx
│   │   └── Sidebar.jsx
│   └── nodes/
│       ├── AccountNode.jsx
│       ├── LoanNode.jsx
│       └── CollateralNode.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

📂 Data Model
nodes: Array<{ id: string; type: 'account' | 'loan' | 'collateral'; data: object; position: { x: number; y: number } }>

edges: Array<{ id: string; source: string; target: string }>

Deleting a node removes it and all descendants (computed via the edge list).

🎨 Node Types & Rendering
In src/components/TreeVisualizer.jsx:
```
const nodeTypes = {
  account:    AccountNode,
  loan:       LoanNode,
  collateral: CollateralNode,
};
AccountNode.jsx: blue box, bottom source handle

LoanNode.jsx: green box, top target & bottom source handles

CollateralNode.jsx: yellow box, top target handle
```
🖥 UX Decisions
Side panel

Fixed‑width (w-64), right‑aligned

Visible only when a node is selected

Displays node Type, ID, and action buttons

Add/Delete flow

Allowed‑children map:
```
{
  account:    ['loan'],
  loan:       ['collateral'],
  collateral: []
}
“Add” button appears only for valid child types

“Delete” removes selected node + descendants

Dagre auto‑layout recalculates positions after each change
```
Some screenshots of the working application which can develop a complete picture how's it currenlty running !!!
* Options available for the Account Tab:
<img width="919" height="534" alt="Screenshot 2025-07-29 131856" src="https://github.com/user-attachments/assets/88f49397-8bbc-46f0-9138-9f0454965c57" />

* Options available for the Loan Tab:
<img width="1139" height="470" alt="Screenshot 2025-07-29 131906" src="https://github.com/user-attachments/assets/3fce5d00-8acd-48aa-98be-e947747a09d3" />

* Options available for the Colletral Tab:
<img width="1178" height="517" alt="Screenshot 2025-07-29 131914" src="https://github.com/user-attachments/assets/0eb80fb3-dc9b-44b5-beae-02ef23f1a9ef" />

⚠️ Limitations & Trade‑offs
* Single root node on startup

* Synchronous Dagre layout may lag for very large trees (>200 nodes)

* In‑memory state only; no persistence or undo/redo

* Node styling is hard‑coded

* Basic accessibility; ARIA and keyboard support not fully implemented

**Repository Metadata**  
- **Name**: `crego-tree-visualizer`  
- **Description**: A Vite‑powered React app for visualizing hierarchical loan‑management data as a tree. Uses React Flow + Dagre for auto‑layout, Zustand for state, and Tailwind CSS for styling.  
- **Topics**: `react`, `vite`, `reactflow`, `dagre`, `zustand`, `tailwindcss`, `tree-visualizer`, `loan-management`  

This version removes all residual “Copy/Edit” labels and ensures clean, consistent formatting. Let me know if you’d like any further tweaks!


