import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { categoryIcons, projectCategories, projects, type CategoryFilter, type Project } from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected readonly categories: CategoryFilter[] = projectCategories;
  protected readonly categoryIcons = categoryIcons;
  protected readonly activeCategory = signal<CategoryFilter['key']>('all');

  protected readonly filteredProjects = computed<Project[]>(() => {
    const key = this.activeCategory();
    return key === 'all' ? projects : projects.filter((project) => project.category === key);
  });

  select(key: CategoryFilter['key']): void {
    this.activeCategory.set(key);
  }
}
