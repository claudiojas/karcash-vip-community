const Terms = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="mb-8 md:mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Termos de Uso
                    </h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-10 shadow-xl">
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-muted-foreground">
                        <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold border-b border-white/5 pb-4">
                            Última atualização: {new Date().getFullYear()}
                        </p>

                        <h3>1. Aceitação dos Termos</h3>
                        <p>Ao acessar e usar a plataforma KarCash, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.</p>

                        <h3>2. Licença de Uso</h3>
                        <p>É concedida permissão para acessar temporariamente os materiais (informações ou software) no site KarCash, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>

                        <h3>3. Isenção de Responsabilidade</h3>
                        <p>Os materiais no site da KarCash são fornecidos "como estão". A KarCash não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
                        <p>Além disso, o KarCash não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>

                        <h3>4. O Módulo de Membros VIP</h3>
                        <p>Ao se tornar um membro VIP, o usuário entende que está pagando pelo acesso a informações privilegiadas sobre veículos. A KarCash atua como uma curadoria de oportunidades e não é a proprietária direta de todos os veículos listados, atuando na intermediação ou facilitação do acesso a esses ativos.</p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                        <a
                            href="/"
                            className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                            Voltar ao Início
                        </a>

                        <div className="flex gap-6">
                            <a href="/privacidade" className="text-muted-foreground hover:text-white transition-colors">
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
