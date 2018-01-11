import $ from "jquery";

class Modal {
  constructor(){
    this.openModalButton = $(".modal__open");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }
  events(){
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal__is-visible");
    return false;
  }
  closeModal(){
    this.modal.removeClass("modal__is-visible");
  }
}

export default Modal;
