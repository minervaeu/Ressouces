/* ============================
    !    Insert Element before Reference Node
            ============================ */
export default function InsertElementBeforeNode(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
};
    