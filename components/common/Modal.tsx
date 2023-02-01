"use client";
import { Dialog, Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { Fragment } from "react";
import { TrailersResult } from "@/types/typing";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  trailer: TrailersResult | undefined;
  name: string | null;
};
const Modal = ({ isOpen, closeModal, trailer, name }: Props) => {
  // console.log(trailer);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 w-full " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 w-full bg-bg bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 w-full overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left text-white align-middle transition-all transform shadow-xl rounded-2xl bg-bg-light sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 "
                    >
                      {name}
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-lg font-medium text-white border border-transparent rounded-md bg-brand hover:bg-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <CgClose className="text-white" />
                      <span className="sr-only">Close Video</span>
                    </button>
                  </div>
                  <div className="mt-4 ">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailer?.key}`}
                      title={`${name} Trailer`}
                      className="w-full rounded-md aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
