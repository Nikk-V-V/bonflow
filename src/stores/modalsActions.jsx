export default function (set, get) {
    return {
        // Modal state
        modalStack: [],

        // Modal actions
        openModal: config => {
            set(state => ({
                modalStack: [...state.modalStack, config],
            }));
        },

        closeModal: () => {
            set(state => ({
                modalStack: state.modalStack.slice(0, -1),
            }));
        },

        replaceModal: config => {
            set(state => ({
                modalStack: [...state.modalStack.slice(0, -1), config],
            }));
        },
    };
}
