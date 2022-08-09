import { hidePreview } from "./previewController.js";

const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen);
};

const closeModal = (modal, classOpen) => {
    modal.classList.remove(classOpen);
    hidePreview();
};

export const modalController = ({modal, btn, classOpen, classClose}) => {
    btn.addEventListener('click', () => {
        openModal(modal, classOpen);
    });
    
    modal.addEventListener('click', (event) => {
        const target = event.target;
        if (target === modal || target.classList.contains(classClose)){
            closeModal(modal, classOpen);
        }
        
    });
};