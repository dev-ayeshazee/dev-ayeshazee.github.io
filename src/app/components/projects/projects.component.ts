import { Component, HostListener, computed, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { categoryIcons, projectCategories, projects, type CategoryFilter, type Project } from '../../data/projects';

type ViewMode = 'showcase' | 'case-studies';

interface LightboxState {
  images: string[];
  index: number;
}

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
  protected readonly viewMode = signal<ViewMode>('showcase');
  protected readonly activeCaseStudy = signal(0);
  protected readonly lightbox = signal<LightboxState | null>(null);

  protected readonly filteredProjects = computed<Project[]>(() => {
    const key = this.activeCategory();
    return key === 'all' ? projects : projects.filter((project) => project.category === key);
  });

  protected readonly caseStudies = computed<Project[]>(() =>
    projects.filter((project) => !!project.details?.length),
  );

  select(key: CategoryFilter['key']): void {
    this.activeCategory.set(key);
  }

  setView(mode: ViewMode): void {
    this.viewMode.set(mode);
  }

  toggleCaseStudy(index: number): void {
    this.activeCaseStudy.update((current) => (current === index ? -1 : index));
  }

  openLightbox(images: string[], index: number): void {
    this.lightbox.set({ images, index });
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightbox.set(null);
    document.body.style.overflow = '';
  }

  nextImage(): void {
    this.lightbox.update((state) =>
      state ? { ...state, index: (state.index + 1) % state.images.length } : state,
    );
  }

  prevImage(): void {
    this.lightbox.update((state) =>
      state ? { ...state, index: (state.index - 1 + state.images.length) % state.images.length } : state,
    );
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.lightbox()) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }
}
