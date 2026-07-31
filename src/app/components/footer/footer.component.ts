import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
}
