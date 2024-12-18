"use client";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../ui/animated-modal";

export function AnimatedModalDemo() {
  return (
    <Modal>
      <div className="flex flex-col items-start space-y-4 bg-black">
      <ModalTrigger className="relative group px-6 py-4 bg-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:scale-110 hover:bg-red-600 transition-transform duration-300 h-14">
  <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
    Experience the Future
  </span>
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img src="/images/favicons/favicon-96x96.png" alt="Castrum Logo" className="h-6 w-6" />
  </span>
</ModalTrigger>

      </div>
      <ModalBody>
        <ModalContent className="bg-black">
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mt-8 mb-8">
            Discover more about <span className="text-red-500">Castrum Legions</span>
          </h4>

          <div className="w-full h-full flex items-center justify-center bg-black">
            <video
              src="/videos/app.mp4"
              autoPlay
              loop

              className="rounded-lg w-full h-full object-cover"
              controls
            ></video>
          </div>
        </ModalContent>
        <ModalFooter>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md text-sm ml-4"
            onClick={() => alert("Launching App")}
          >
            Launch App
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
