import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function DeleteUserForm({
    className = '',
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Fiók törlése
                </h2>

                <p className="mt-1 text-sm text-gray-900">
                Miután fiókja törlésre kerül, annak minden erőforrása és
                adata véglegesen törlődik. A fiók törlése előtt kérjük,
                töltse le azokat az adatokat vagy információkat, amelyeket
                meg szeretne őrizni.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Fiók törlése
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        {/* Are you sure you want to delete your account? */}
                        Tényleg törölni akarod az fiókodat?
                    </h2>

                    <p className="mt-1 text-sm text-gray-900">
                        {/* Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account. */}
                        Miután fiókját törölték, annak minden erőforrása és
                        adata véglegesen törlődik. Kérjük, adja meg
                        jelszavát a megerősítéshez, hogy véglegesen törölni
                        szeretné fiókját.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Jelszó"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Jelszó"
                        />

                        <InputError
                            message={errors.password ? "A jelszó mező kitöltése kötelező." : ''}
                            className="mt-2"
                            
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Mégse
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Fiók törlése
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
