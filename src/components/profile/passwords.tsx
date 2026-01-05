import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Passwords = ({ editPassword, setEditPassword }: { editPassword: boolean, setEditPassword: (arg: boolean)=>void }) => {

    const handleCancelEdit = () => {
        setEditPassword(false)
    }

    const handleSaveEdit = () => {
        setEditPassword(false)
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="w-full">
                <label className="block text-sm font-medium text-slate-700 mb-2">Senha</label>
                {editPassword ?
                    <Input
                        type="password"
                        onChange={() => { }}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="*********"
                    />
                    :
                    <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                        *********
                    </p>
                }
            </div>
            {editPassword &&
                <div className="w-full flex gap-3 justify-end">
                    < Button
                        variant="link"
                        onClick={handleCancelEdit}
                        className="w-fit cursor-pointer"
                    >Cancelar</Button>

                    < Button
                        variant="default"
                        onClick={handleSaveEdit}
                        className="w-fit cursor-pointer"
                    >Salvar</Button>
                </div>
            }
        </div>
    )
}