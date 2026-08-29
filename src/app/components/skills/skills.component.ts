import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { certifications, educations } from '../../data/profile';
import { languages } from '../../data/languages';
import { skillGroups } from '../../data/skills';

type TabKind = 'skills' | 'certifications' | 'education' | 'languages';

interface Tab {
  key: string;
  label: string;
  icon: string;
  kind: TabKind;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  protected readonly certifications = certifications;
  protected readonly educations = educations;
  protected readonly languages = languages;

  protected readonly tabs: Tab[] = [
    ...skillGroups.map((group) => ({ key: group.key, label: group.label, icon: group.icon, kind: 'skills' as const })),
    { key: 'certifications', label: 'Certifications', icon: 'award', kind: 'certifications' },
    { key: 'education', label: 'Education', icon: 'graduation-cap', kind: 'education' },
    { key: 'spoken-languages', label: 'Languages Spoken', icon: 'languages', kind: 'languages' },
  ];

  protected readonly activeKey = signal(this.tabs[0].key);

  protected readonly activeTab = computed(() => this.tabs.find((tab) => tab.key === this.activeKey())!);

  protected readonly activeSkillGroup = computed(() =>
    skillGroups.find((group) => group.key === this.activeKey()),
  );

  select(key: string): void {
    this.activeKey.set(key);
  }
}
