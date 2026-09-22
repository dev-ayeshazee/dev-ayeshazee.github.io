import { Component, HostListener, computed, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { categoryIcons, projects, type Project } from '../../data/projects';
import { personalProjects, type PersonalProject } from '../../data/personal-projects';

type ViewMode = 'personal' | 'enterprise';

interface LightboxState {
  images: string[];
  index: number;
}

const FLAGSHIP_ENTERPRISE_PROJECTS = [
  'Hoopiz — Credit Management & Risk Intelligence Platform',
  'Websays — Social Listening Platform',
  'Zone Healthy — Health & Nutrition Meal Delivery Platform',
  'Saylogix — Multi-Merchant Warehouse & Fulfillment Management System',
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected readonly categoryIcons = categoryIcons;
  protected readonly viewMode = signal<ViewMode>('personal');
  protected readonly activePersonalIndex = signal(0);
  protected readonly activeFlagshipIndex = signal(0);
  protected readonly lightbox = signal<LightboxState | null>(null);
  protected readonly personalProjects: PersonalProject[] = personalProjects;

  protected readonly flagshipProjects: Project[] = FLAGSHIP_ENTERPRISE_PROJECTS.map(
    (name) => projects.find((project) => project.name === name)!,
  );

  protected readonly additionalProjects: Project[] = projects.filter(
    (project) => !FLAGSHIP_ENTERPRISE_PROJECTS.includes(project.name),
  );

  setView(mode: ViewMode): void {
    this.viewMode.set(mode);
  }

  togglePersonal(index: number): void {
    this.activePersonalIndex.update((current) => (current === index ? -1 : index));
  }

  toggleFlagship(index: number): void {
    this.activeFlagshipIndex.update((current) => (current === index ? -1 : index));
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
