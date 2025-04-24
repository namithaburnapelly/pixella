import { NgModule } from '@angular/core';
import {
  AlignJustify,
  ArrowRight,
  Ellipsis,
  EllipsisVertical,
  LucideAngularModule,
  Moon,
  PanelRightClose,
  PanelRightOpen,
  Search,
  SquarePen,
  Sun,
} from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [
    LucideAngularModule.pick({
      Search,
      PanelRightClose,
      PanelRightOpen,
      SquarePen,
      AlignJustify,
      EllipsisVertical,
      Sun,
      Moon,
      Ellipsis,
      ArrowRight,
    }),
  ],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
