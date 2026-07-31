import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  protected readonly profile = profile;
}
