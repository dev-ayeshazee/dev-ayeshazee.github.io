export interface Metric {
  icon: 'rocket' | 'zap' | 'wrench' | 'trending-up';
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { icon: 'rocket', value: '6+ Years', label: 'Professional development experience in global remote teams' },
  { icon: 'zap', value: '25% Reduction', label: 'In initial load times through Angular performance optimizations' },
  { icon: 'wrench', value: '40+ Issues', label: 'Enterprise issues resolved across credit management & risk modules' },
  { icon: 'trending-up', value: '20% Boost', label: 'Performance delivered across high-priority client workflows' },
];
