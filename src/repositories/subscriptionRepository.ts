import { supabase } from "@/lib/supabaseClient";

interface CreateSubscriptionParams {
    name: string;
    email: string;
    phone: string;
}

const subscriptionRepository = {
    /**
     * Chama a RPC do Supabase para criar perfil e assinatura.
     * @param params Dados do usuário (nome, email, telefone)
     */
    createSubscription: async ({ name, email, phone }: CreateSubscriptionParams) => {
        const { data, error } = await supabase.rpc('create_profile_and_subscription', {
            user_name: name,
            user_email: email,
            user_phone: phone,
        });

        if (error) {
            throw error;
        }

        return data;
    }
};

export default subscriptionRepository;
