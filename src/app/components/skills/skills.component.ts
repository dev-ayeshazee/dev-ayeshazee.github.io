import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { skillGroups } from '../../data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  protected readonly skillGroups = skillGroups;
  protected readonly activeKey = signal(skillGroups[0].key);

  select(key: string): void {
    this.activeKey.set(key);
  }
}
