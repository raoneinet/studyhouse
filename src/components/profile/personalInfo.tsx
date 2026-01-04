import { User } from "@/types/user"
import { Input } from "../ui/input"

export const PersonalInfo = ({ user, editing }: { user: any, editing: boolean }) => {

    return (
        <div className="w-full flex flex-col gap-3">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                {editing ?
                    <Input
                        type="text"
                        value={`${user.firstname} ${user.lastname}`}
                        onChange={()=>{}}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="joao@email.com"
                    />
                    :
                    <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                        {`${user.firstname} ${user.lastname}`}
                    </p>
                }
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                {editing ?
                    <Input
                        type="email"
                        value={user.email}
                        onChange={()=>{}}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="joao@email.com"
                    />
                    :
                    <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                        {user.email || 'Não informado'}
                    </p>
                }
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Data de nascimento</label>
                {editing ?
                    <Input
                        type="date"
                        value={user.date_of_birth}
                        onChange={()=>{}}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="joao@email.com"
                    />
                    :
                    <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                        {user.date_of_birth}
                    </p>
                }
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Profissão</label>
                {editing ?
                    <Input
                        type="text"
                        value={user.profession}
                        onChange={()=>{}}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="estudante"
                    />
                    :
                    <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                        {user.profession || 'Não informado'}
                    </p>
                }
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">País</label>
                {editing ?
                    <Input
                        type="text"
                        value={user.country}
                        onChange={()=>{}}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="estudante"
                    />
                    :
                    <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                        {user.country || 'Não informado'}
                    </p>
                }
            </div>
        </div>
    )
}