import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';


const ConfirmAddFolder = ({ open, setOpen, handleSubmit })  => {
    const [ name, setName ] = useState('');
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment} onClose={setOpen}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="bg-gray-5 px-5 py-5">
                        <div className="">
                            <div className="">
                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-black-900">
                                    Create Folder
                                </Dialog.Title>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="mb-6">
                                <label htmlFor="folder" className="block mb-2 text-sm text-black font-medium">Name</label>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    name="folder"
                                    className="mt-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Name of the Folder"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-4 sm:flex sm:flex-row-reverse">
                    <button
                        type="button"
                        className="group mx-auto flex justify-center items-center py-2 px-7 rounded border border-transparent text-sm font-medium text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => handleSubmit(name)}
                    >
                        Create
                    </button>
                    <button
                        type="button"
                        className="group mx-auto flex justify-center items-center py-2 px-7 rounded border border-transparent text-sm font-medium text-green-600 bg-white border-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        Cancel
                    </button>
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}

export default ConfirmAddFolder;
