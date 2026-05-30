import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Palette, Type, Link as LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-[#3a3a3a]" style={{ fontFamily: 'Playfair Display' }}>
            INOIVEI
          </div>
          <div className="flex gap-8">
            <a href="#cores" className="text-[#878484] hover:text-[#c9a96e] transition">Cores</a>
            <a href="#fontes" className="text-[#878484] hover:text-[#c9a96e] transition">Fontes</a>
            <a href="#links" className="text-[#878484] hover:text-[#c9a96e] transition">Links</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white to-[#F2F2F2]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-[#3a3a3a] mb-6"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Guia de Identidade Visual
          </h1>
          <p className="text-xl text-[#878484] mb-8">
            Todas as configurações de marca da INOIVEI em um único lugar
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#c9a96e] hover:bg-[#b8985c] text-white px-8 py-6 text-lg">
              Explorar Guia <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cores Section */}
      <section id="cores" className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <Palette className="w-8 h-8 text-[#c9a96e]" />
            <h2 
              className="text-4xl font-bold text-[#3a3a3a]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Paleta de Cores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Dourado */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-32 bg-[#c9a96e]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[#3a3a3a] mb-1">Dourado Suave</h3>
                <p className="text-sm text-[#878484] mb-2">#c9a96e</p>
                <p className="text-xs text-[#878484]">Elegância e luxo</p>
              </div>
            </Card>

            {/* Cinza Médio */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-32 bg-[#878484]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[#3a3a3a] mb-1">Cinza Médio</h3>
                <p className="text-sm text-[#878484] mb-2">#878484</p>
                <p className="text-xs text-[#878484]">Sofisticação neutra</p>
              </div>
            </Card>

            {/* Cinza Escuro */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-32 bg-[#3a3a3a]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[#3a3a3a] mb-1">Cinza Escuro</h3>
                <p className="text-sm text-[#878484] mb-2">#3a3a3a</p>
                <p className="text-xs text-[#878484]">Contraste e leitura</p>
              </div>
            </Card>

            {/* Fundo Principal */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-32 bg-[#F2F2F2] border-2 border-[#e8e6e2]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[#3a3a3a] mb-1">Fundo Principal</h3>
                <p className="text-sm text-[#878484] mb-2">#F2F2F2</p>
                <p className="text-xs text-[#878484]">Limpeza e suavidade</p>
              </div>
            </Card>

            {/* Branco */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-32 bg-white border-2 border-[#e8e6e2]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[#3a3a3a] mb-1">Branco Puro</h3>
                <p className="text-sm text-[#878484] mb-2">#ffffff</p>
                <p className="text-xs text-[#878484]">Frescor e leveza</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fontes Section */}
      <section id="fontes" className="py-20 bg-[#F2F2F2]">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <Type className="w-8 h-8 text-[#c9a96e]" />
            <h2 
              className="text-4xl font-bold text-[#3a3a3a]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Tipografia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Playfair Display */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="text-4xl font-bold text-[#3a3a3a] mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Playfair Display
              </div>
              <p className="text-[#878484] mb-4">Serifada, elegante e clássica</p>
              <p className="text-sm text-[#878484]">
                Ideal para títulos principais, headings e elementos de destaque que exigem elegância e sofisticação.
              </p>
            </Card>

            {/* Montserrat */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="text-4xl font-bold text-[#3a3a3a] mb-4"
                style={{ fontFamily: 'Montserrat' }}
              >
                Montserrat
              </div>
              <p className="text-[#878484] mb-4">Sem serifa, moderna e limpa</p>
              <p className="text-sm text-[#878484]">
                Perfeita para textos de apoio, botões, labels e conteúdo que requer clareza e legibilidade.
              </p>
            </Card>

            {/* Great Vibes */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="text-4xl font-bold text-[#c9a96e] mb-4"
                style={{ fontFamily: 'Great Vibes' }}
              >
                Great Vibes
              </div>
              <p className="text-[#878484] mb-4">Manuscrita e artesanal</p>
              <p className="text-sm text-[#878484]">
                Para detalhes especiais, assinaturas e elementos que trazem um toque pessoal e artesanal.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <LinkIcon className="w-8 h-8 text-[#c9a96e]" />
            <h2 
              className="text-4xl font-bold text-[#3a3a3a]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Links Interativos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Catálogo Online */}
            <Card className="p-8 border-2 border-[#c9a96e] shadow-lg bg-white hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#3a3a3a] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Catálogo Online
              </h3>
              <p className="text-[#878484] mb-6">
                Acesse a versão completa do catálogo digital com todas as coleções e detalhes dos robes.
              </p>
              <a 
                href="https://8080-i73vplhp4ck3383dvv4to-036fc767.us2.manus.computer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a96e] hover:bg-[#b8985c] text-white px-6 py-3 rounded transition"
              >
                Abrir Catálogo →
              </a>
            </Card>

            {/* WhatsApp */}
            <Card className="p-8 border-2 border-[#c9a96e] shadow-lg bg-white hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#3a3a3a] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                WhatsApp Direto
              </h3>
              <p className="text-[#878484] mb-6">
                Entre em contato direto conosco via WhatsApp para tirar dúvidas e fazer pedidos.
              </p>
              <a 
                href="https://wa.me/5522999896319"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a96e] hover:bg-[#b8985c] text-white px-6 py-3 rounded transition"
              >
                Enviar Mensagem →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a3a3a] text-white py-12">
        <div className="container max-w-5xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
              INOIVEI
            </h3>
            <p className="text-[#c9a96e] mb-6">Elegância para o seu momento</p>
            <p className="text-sm text-gray-400">
              © 2025 INOIVEI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
