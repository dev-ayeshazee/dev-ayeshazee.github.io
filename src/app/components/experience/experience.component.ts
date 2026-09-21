import { Component } from '@angular/core';
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
}
