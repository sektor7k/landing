"use client";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../ui/animated-modal";

export function AnimatedModalDemo() {
  return (
    <Modal>
      <div className="flex flex-col items-start space-y-4 bg-black">
        <ModalTrigger className="px-6 py-3 bg-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:scale-110 hover:bg-red-600 transition-transform duration-300">
          Experience the Future
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
