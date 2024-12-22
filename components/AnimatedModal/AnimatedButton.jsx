'use client'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '../ui/animated-modal'

export function AnimatedModalDemo() {
  return (
    <Modal>
      <div className="flex flex-col items-start space-y-4 bg-black">
        <ModalTrigger className="group relative h-14 rounded-full bg-red-500 px-6 py-4 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-red-600">
          <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
            Experience the Future
          </span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src="/images/favicons/favicon-96x96.png" alt="Castrum Logo" className="h-6 w-6" />
          </span>
        </ModalTrigger>
      </div>
      <ModalBody>
        <ModalContent className="bg-black">
          <h4 className="mb-8 mt-8 text-center text-lg font-bold text-neutral-600 dark:text-neutral-100 md:text-2xl">
            Discover more about <span className="text-red-500">Castrum Legions</span>
          </h4>

          <div className="flex h-full w-full items-center justify-center bg-black">
            <video
              src="/videos/app.mp4"
              autoPlay
              loop
              className="h-full w-full rounded-lg object-cover"
              controls></video>
          </div>
        </ModalContent>
        <ModalFooter>
          <button
            className="ml-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white"
            onClick={() => alert('Launching App')}>
            Launch App
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}
