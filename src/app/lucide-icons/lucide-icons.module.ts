import { NgModule } from '@angular/core';
import {
  AlignJustify,
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
    }),
  ],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
