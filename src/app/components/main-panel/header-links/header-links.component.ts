import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
export interface LinkItem {
  label: string;
  href: string;
  icon: 'portfolio' | 'linkedin' | 'github' | 'behance' | 'stackshare';
}
 
export type Variant = 'badge';
@Component({
  selector: 'header-links',
  imports: [CommonModule],
  templateUrl: './header-links.html',
})

export class HeaderLinks implements OnInit {
  // @Input() variant: Variant = 'badge';
 
  @Input() links: LinkItem[] = [
    { label: 'Portfolio',   href: '#', icon: 'portfolio'  },
    { label: 'LinkedIn',    href: '#', icon: 'linkedin'   },
    { label: 'GitHub',      href: '#', icon: 'github'     },
    { label: 'Behance',     href: '#', icon: 'behance'    },
    { label: 'Stackshare',  href: '#', icon: 'stackshare' },
  ];
 
  ngOnInit(): void {}
 
}
