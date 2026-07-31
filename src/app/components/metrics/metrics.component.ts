import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { metrics } from '../../data/metrics';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css',
})
export class MetricsComponent {
  protected readonly metrics = metrics;
}
