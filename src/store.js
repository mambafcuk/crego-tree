import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  selected: null,
  addNode: (type, parentId = null) => {
    const id = nanoid();
    const newNode = { id, type, data: { id }, position: { x: 0, y: 0 } };
    set(state => ({
      nodes: [...state.nodes, newNode],
      edges: parentId
        ? [...state.edges, { id: `e_${parentId}_${id}`, source: parentId, target: id }]
        : state.edges
    }));
  },
  deleteNode: (id) => {
    const { nodes, edges } = get();
    // find descendants
    const toRemove = new Set([id]);
    let changed = true;
    while (changed) {
      changed = false;
      edges.forEach(e => {
        if (toRemove.has(e.source) && !toRemove.has(e.target)) {
          toRemove.add(e.target);
          changed = true;
        }
      });
    }
    set({
      nodes: nodes.filter(n => !toRemove.has(n.id)),
      edges: edges.filter(e => !toRemove.has(e.source) && !toRemove.has(e.target)),
      selected: null
    });
  },
  selectNode: (id) => set({ selected: id }),
}));

export default useStore;