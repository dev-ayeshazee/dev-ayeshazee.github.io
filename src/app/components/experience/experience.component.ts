import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { experience } from '../../data/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  protected readonly experience = experience;
  protected readonly activeIndex = signal<number>(0);

  toggle(index: number): void {
    this.activeIndex.update((current) => (current === index ? -1 : index));
  }
}
