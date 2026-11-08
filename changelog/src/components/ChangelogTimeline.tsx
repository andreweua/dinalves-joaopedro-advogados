import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Wrench, 
  Bug, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Layers, 
  Rocket,
  CheckCircle2,
  ExternalLink,
  Filter
} from 'lucide-react';
import { Release, TagType } from '../types/changelog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ChangelogTimelineProps {
  releases: Release[];
}

export const ChangelogTimeline: React.FC<ChangelogTimelineProps> = ({ releases }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | TagType>('all');
  const [expandedReleases, setExpandedReleases] = useState<Record<string, boolean>>({
    'v1.0.0': true // v1.0.0 começa expandida por padrão
  });

  // Alterna expansão de uma release específica
  const toggleRelease = (version: string) => {
    setExpandedReleases(prev => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  // Contagem de itens por categoria
  const counts = useMemo(() => {
    const allItems = releases.flatMap(r => r.items);
    return {
      all: allItems.length,
      novo: allItems.filter(i => i.type === 'novo').length,
      melhoria: allItems.filter(i => i.type === 'melhoria').length,
      correcao: allItems.filter(i => i.type === 'correcao').length,
    };
  }, [releases]);

  // Filtragem dos itens de cada versão
  const filteredReleases = useMemo(() => {
    return releases.map(release => {
      const filteredItems = activeFilter === 'all' 
        ? release.items 
        : release.items.filter(item => item.type === activeFilter);
      return {
        ...release,
        items: filteredItems
      };
    }).filter(release => release.items.length > 0);
  }, [releases, activeFilter]);

  // Renderizador de badge com ícone
  const renderTagBadge = (type: TagType) => {
    switch (type) {
      case 'novo':
        return (
          <Badge variant="novo">
            <Sparkles className="w-3 h-3" />
            <span>Novo</span>
          </Badge>
        );
      case 'melhoria':
        return (
          <Badge variant="melhoria">
            <Wrench className="w-3 h-3" />
            <span>Melhoria</span>
          </Badge>
        );
      case 'correcao':
        return (
          <Badge variant="correcao">
            <Bug className="w-3 h-3" />
            <span>Correção</span>
          </Badge>
        );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* HEADER ESTILO PRODUCT HUNT / LINEAR */}
      <header className="mb-12 text-center sm:text-left space-y-4 border-b border-slate-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
          <Rocket className="w-3.5 h-3.5 text-emerald-400" />
          <span>Product Updates & Releases</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Histórico de Atualizações
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
              Acompanhe a evolução contínua, novos recursos, aprimoramentos técnicos e correções entregues pela equipe de engenharia.
            </p>
          </div>

          <a 
            href="../index.html" 
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/90 hover:bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-800 transition self-start sm:self-auto"
          >
            <span>Voltar ao Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* BARRA DE FILTROS INTERATIVOS */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mr-2">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Filtrar por:</span>
          </div>

          <Button
            size="sm"
            variant={activeFilter === 'all' ? 'active' : 'default'}
            onClick={() => setActiveFilter('all')}
          >
            <span>Tudo</span>
            <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
              {counts.all}
            </span>
          </Button>

          <Button
            size="sm"
            variant={activeFilter === 'novo' ? 'active' : 'default'}
            onClick={() => setActiveFilter('novo')}
            className={cn(activeFilter === 'novo' && 'bg-emerald-500 text-slate-950 hover:bg-emerald-400')}
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Novidades</span>
            <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full bg-slate-800 text-emerald-400">
              {counts.novo}
            </span>
          </Button>

          <Button
            size="sm"
            variant={activeFilter === 'melhoria' ? 'active' : 'default'}
            onClick={() => setActiveFilter('melhoria')}
            className={cn(activeFilter === 'melhoria' && 'bg-blue-500 text-slate-950 hover:bg-blue-400')}
          >
            <Wrench className="w-3 h-3 text-blue-400" />
            <span>Melhorias</span>
            <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full bg-slate-800 text-blue-400">
              {counts.melhoria}
            </span>
          </Button>

          <Button
            size="sm"
            variant={activeFilter === 'correcao' ? 'active' : 'default'}
            onClick={() => setActiveFilter('correcao')}
            className={cn(activeFilter === 'correcao' && 'bg-red-500 text-slate-950 hover:bg-red-400')}
          >
            <Bug className="w-3 h-3 text-red-400" />
            <span>Correções</span>
            <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full bg-slate-800 text-red-400">
              {counts.correcao}
            </span>
          </Button>
        </div>
      </header>

      {/* TIMELINE VERTICAL */}
      <div className="relative border-l border-slate-800/80 ml-4 sm:ml-28 pl-6 sm:pl-10 space-y-16">
        
        {filteredReleases.map((release) => {
          const isExpanded = expandedReleases[release.version] ?? true;

          return (
            <article 
              key={release.version} 
              className={cn(
                "relative group transition-all duration-300",
                release.isLatest && "pt-1"
              )}
            >
              
              {/* NÓ DA TIMELINE (CIRCULO LATERAL) */}
              <div 
                className={cn(
                  "absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center",
                  release.isLatest 
                    ? "bg-emerald-500 border-slate-950 ring-4 ring-emerald-500/20" 
                    : "bg-slate-800 border-slate-950 group-hover:bg-slate-600"
                )}
              >
                {release.isLatest && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                )}
              </div>

              {/* DATA NA ESQUERDA (DESKTOP) */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="block text-xs font-mono font-semibold text-slate-400">
                  {release.version}
                </span>
                <span className="block text-[11px] text-slate-500 whitespace-nowrap">
                  {release.date.split(' de ')[0]} {release.date.split(' de ')[1]?.slice(0, 3)}
                </span>
              </div>

              {/* CARD PRINCIPAL DA VERSÃO */}
              <div className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                release.isLatest 
                  ? "bg-slate-900/70 border-emerald-500/30 shadow-2xl shadow-emerald-950/20" 
                  : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
              )}>
                
                {/* CABEÇALHO DO CARD */}
                <div className="p-6 sm:p-7 border-b border-slate-800/60 bg-gradient-to-b from-slate-800/30 to-transparent">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className={cn(
                        "px-2.5 py-1 rounded-md font-mono text-xs font-bold tracking-wider uppercase border",
                        release.isLatest 
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
                          : "bg-slate-800 text-slate-300 border-slate-700"
                      )}>
                        {release.version}
                      </span>

                      {release.isLatest && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Versão Atual de Produção
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {release.date}
                      </span>

                      {/* BOTÃO COLAPSO/EXPANSÃO */}
                      <button
                        onClick={() => toggleRelease(release.version)}
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800/60 transition"
                        title={isExpanded ? 'Recolher detalhes' : 'Expandir detalhes'}
                      >
                        <span className="text-[11px] hidden sm:inline">
                          {isExpanded ? 'Recolher' : 'Expandir'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* TÍTULO PRINCIPAL (Foco em v1.0.0 Lançamento Oficial) */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-3">
                    {release.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mt-2 max-w-3xl">
                    {release.summary}
                  </p>
                </div>

                {/* CORPO DO CARD COM ACCORDION EXPANSÍVEL */}
                {isExpanded && (
                  <div className="p-6 sm:p-7 space-y-8 animate-in fade-in-50 duration-200">
                    
                    {/* LISTA DE ITENS DO CHANGELOG */}
                    <div className="space-y-6">
                      {release.items.map((item) => (
                        <div 
                          key={item.id} 
                          className="group/item flex flex-col gap-3 rounded-xl p-4 -mx-4 hover:bg-slate-800/40 border border-transparent hover:border-slate-800 transition duration-200"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2.5 flex-wrap">
                              {renderTagBadge(item.type)}
                              <h3 className="text-base font-semibold text-slate-100 group-hover/item:text-white transition">
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-0.5">
                            {item.description}
                          </p>

                          {/* MÉTRICAS CHAVE (SE EXISTIR) */}
                          {item.metrics && (
                            <div className="flex flex-wrap gap-4 pt-1">
                              {item.metrics.map((metric, idx) => (
                                <div key={idx} className="bg-slate-950/60 border border-slate-800/80 px-3 py-1.5 rounded-lg text-xs">
                                  <span className="text-slate-400 mr-2">{metric.label}:</span>
                                  <strong className="text-emerald-400 font-mono">{metric.value}</strong>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* MOCK DE IMAGEM / PREVIEW VISUAL */}
                          {item.previewImage && (
                            <div className="mt-3 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group-hover/item:border-slate-700 transition">
                              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                                <img 
                                  src={item.previewImage.src} 
                                  alt={item.previewImage.alt}
                                  className="w-full h-full object-cover object-center group-hover/item:scale-105 transition duration-500 opacity-90 group-hover/item:opacity-100"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                              </div>
                              {item.previewImage.caption && (
                                <div className="p-3 text-[11px] text-slate-400 border-t border-slate-800/60 flex items-center gap-2 bg-slate-950">
                                  <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                  <span>{item.previewImage.caption}</span>
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            </article>
          );
        })}

        {filteredReleases.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
            <p className="text-slate-400 text-sm">
              Nenhuma atualização encontrada para o filtro selecionado.
            </p>
            <Button 
              size="sm" 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveFilter('all')}
            >
              Limpar Filtros
            </Button>
          </div>
        )}

      </div>

      {/* RODAPÉ ELEGANTE ESTILO LINEAR */}
      <footer className="mt-20 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-2">
        <p>
          Construído com <strong className="text-slate-300">React</strong>, <strong className="text-slate-300">Tailwind CSS</strong> e padrões <strong className="text-slate-300">Shadcn UI</strong>.
        </p>
        <p>
          Desenvolvido por: <strong>PereiraLabs - Divisão de Tecnologia e IA</strong> | Louzada & Pereira - Soluções Digitais
        </p>
      </footer>

    </div>
  );
};
