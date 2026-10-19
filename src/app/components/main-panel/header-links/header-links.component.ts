import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvData } from '@interfaces/CVData';

export type LinkItem = CvData['links'][number];
export type Icon = 'portfolio' | 'linkedin' | 'github' | 'behance' | 'stackshare' | 'instagram' | 'link';

const URL_ICON_MAP: { pattern: RegExp; icon: Icon }[] = [
  { pattern: /mayit/,  icon: 'portfolio'   },
  { pattern: /linkedin/,   icon: 'linkedin'    },
  { pattern: /github/,     icon: 'github'      },
  { pattern: /behance/,    icon: 'behance'     },
  { pattern: /stackshare/,  icon: 'stackshare'  },
  { pattern: /instagram/,  icon: 'instagram'   },
];

@Component({
  selector: 'header-links',
  imports: [CommonModule],
  templateUrl: './header-links.html',
})
export class HeaderLinks {
  @Input() links: LinkItem[] = [];
  /** true: pills show the label and the URLs are listed as text below. false: pills show the URL. */
  @Input() separateUrlLine = false;

  displayUrl(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
  }

  resolveIcon(url: string): Icon {
    return URL_ICON_MAP.find(({ pattern }) => pattern.test(url))?.icon ?? 'link';
  }
}
