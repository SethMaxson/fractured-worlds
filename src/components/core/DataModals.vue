<template>

    <!-- #region Character Modal -->
    <div class="modal fade m-0 p-0" id="modal-character" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-fullscreen-lg-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 card-title"> </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"> </div>
        </div>
      </div>
    </div>
    <!-- #endregion Character Modal -->

    <!-- #region Faction Modal -->
    <div class="modal fade m-0 p-0" id="modal-faction" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-fullscreen-lg-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 card-title"> </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"> </div>
        </div>
      </div>
    </div>
    <!-- #endregion Faction Modal -->
	
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'DataModals',
	mounted() {

    // Handle Character modal
		const characterModal = document.getElementById('modal-character');
		if (characterModal) {
			characterModal.addEventListener('show.bs.modal', event => {
				// Button that triggered the modal
				// @ts-ignore
				const button = event.relatedTarget as HTMLButtonElement;

				// Extract info from data children
				const title = button.querySelector('.modal-title')?.innerHTML;
				const body = button.querySelector('.modal-body')?.innerHTML;
				const fullView = button.querySelector('.has-person');

				// Update the modal's content.
				const modalTitle = characterModal.querySelector('.modal-title') as HTMLElement;
				const modalBody = characterModal.querySelector('.modal-body') as HTMLElement;
				const modalDialog = characterModal.querySelector('.modal-dialog') as HTMLElement;

				modalTitle.innerHTML = title ? title : "Error";
				modalBody.innerHTML = body ? body : "Whoops! Encountered an error finding the character.";

        if (fullView) {
          modalDialog.classList.add("modal-xl");
          modalDialog.classList.add("modal-fullscreen-lg-down");
        }
        else {
          modalDialog.classList.remove("modal-xl");
          modalDialog.classList.remove("modal-fullscreen-lg-down");
        }
			})
		}
    
	}
});
</script>