"""
PDF Comparison Tool
Compares two PDFs page-by-page and generates a beautiful HTML report
"""

import fitz  # PyMuPDF
import difflib
from pathlib import Path
from typing import List, Dict, Tuple
from datetime import datetime
from html_generator import HTMLReportGenerator
from text_processor import TextProcessor


class PDFComparator:
    """Main class for PDF comparison operations"""
    
    def __init__(self, dev_pdf_path: str, prod_pdf_path: str):
        self.dev_pdf_path = Path(dev_pdf_path)
        self.prod_pdf_path = Path(prod_pdf_path)
        self.text_processor = TextProcessor()
        
        if not self.dev_pdf_path.exists():
            raise FileNotFoundError(f"Dev PDF not found: {dev_pdf_path}")
        if not self.prod_pdf_path.exists():
            raise FileNotFoundError(f"Prod PDF not found: {prod_pdf_path}")
    
    def extract_pages(self, pdf_path: Path) -> List[Dict]:
        """
        Extract text and metadata from each page of a PDF
        Returns list of dicts with page number, text, and formatting info
        """
        pages_data = []
        
        with fitz.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf, start=1):
                # Extract text with formatting
                text = page.get_text("text")
                
                # Get page dimensions for layout info
                rect = page.rect
                
                # Extract text blocks with position info for better formatting
                blocks = page.get_text("dict")["blocks"]
                
                pages_data.append({
                    'page_num': page_num,
                    'text': text,
                    'width': rect.width,
                    'height': rect.height,
                    'blocks': blocks
                })
        
        return pages_data
    
    def compare_page_texts(self, dev_text: str, prod_text: str) -> Tuple[str, str, Dict]:
        """
        Compare two page texts and return HTML-formatted versions with highlights
        Returns (dev_html, prod_html, stats)
        """
        dev_lines = dev_text.splitlines(keepends=True)
        prod_lines = prod_text.splitlines(keepends=True)
        
        # Use SequenceMatcher for detailed comparison
        matcher = difflib.SequenceMatcher(None, dev_lines, prod_lines)
        
        dev_html_lines = []
        prod_html_lines = []
        
        stats = {
            'additions': 0,
            'deletions': 0,
            'modifications': 0,
            'unchanged': 0
        }
        
        for tag, i1, i2, j1, j2 in matcher.get_opcodes():
            if tag == 'equal':
                # Unchanged lines
                for line in dev_lines[i1:i2]:
                    dev_html_lines.append(self._escape_html(line))
                for line in prod_lines[j1:j2]:
                    prod_html_lines.append(self._escape_html(line))
                stats['unchanged'] += (i2 - i1)
                
            elif tag == 'delete':
                # Lines only in dev (deleted in prod)
                for line in dev_lines[i1:i2]:
                    dev_html_lines.append(
                        f'<span class="deleted">{self._escape_html(line)}</span>'
                    )
                stats['deletions'] += (i2 - i1)
                
            elif tag == 'insert':
                # Lines only in prod (added)
                for line in prod_lines[j1:j2]:
                    prod_html_lines.append(
                        f'<span class="inserted">{self._escape_html(line)}</span>'
                    )
                stats['additions'] += (j2 - j1)
                
            elif tag == 'replace':
                # Lines modified
                for line in dev_lines[i1:i2]:
                    dev_html_lines.append(
                        f'<span class="modified">{self._escape_html(line)}</span>'
                    )
                for line in prod_lines[j1:j2]:
                    prod_html_lines.append(
                        f'<span class="modified">{self._escape_html(line)}</span>'
                    )
                stats['modifications'] += max(i2 - i1, j2 - j1)
        
        dev_html = ''.join(dev_html_lines)
        prod_html = ''.join(prod_html_lines)
        
        return dev_html, prod_html, stats
    
    def _escape_html(self, text: str) -> str:
        """Escape HTML special characters"""
        return (text
                .replace('&', '&amp;')
                .replace('<', '&lt;')
                .replace('>', '&gt;')
                .replace('"', '&quot;')
                .replace("'", '&#39;'))
    
    def compare(self) -> str:
        """
        Main comparison method
        Returns path to generated HTML report
        """
        print("📄 Extracting pages from Dev PDF...")
        dev_pages = self.extract_pages(self.dev_pdf_path)
        
        print("📄 Extracting pages from Prod PDF...")
        prod_pages = self.extract_pages(self.prod_pdf_path)
        
        print("🔍 Comparing pages...")
        max_pages = max(len(dev_pages), len(prod_pages))
        
        comparison_results = []
        total_stats = {
            'additions': 0,
            'deletions': 0,
            'modifications': 0,
            'unchanged': 0,
            'total_pages': max_pages
        }
        
        for page_num in range(max_pages):
            dev_text = dev_pages[page_num]['text'] if page_num < len(dev_pages) else ""
            prod_text = prod_pages[page_num]['text'] if page_num < len(prod_pages) else ""
            
            dev_html, prod_html, stats = self.compare_page_texts(dev_text, prod_text)
            
            # Update total stats
            for key in ['additions', 'deletions', 'modifications', 'unchanged']:
                total_stats[key] += stats[key]
            
            comparison_results.append({
                'page_num': page_num + 1,
                'dev_html': dev_html,
                'prod_html': prod_html,
                'stats': stats,
                'has_changes': stats['additions'] > 0 or stats['deletions'] > 0 or stats['modifications'] > 0
            })
        
        print("📊 Generating HTML report...")
        generator = HTMLReportGenerator(
            dev_filename=self.dev_pdf_path.name,
            prod_filename=self.prod_pdf_path.name
        )
        
        output_path = generator.generate_report(comparison_results, total_stats)
        
        print(f"✅ Report generated successfully: {output_path}")
        return output_path


def main():
    """Main entry point"""
    import sys
    
    if len(sys.argv) != 3:
        print("Usage: python pdf_comparator.py <dev_pdf> <prod_pdf>")
        print("\nExample:")
        print("  python pdf_comparator.py sample/dev.pdf sample/prod.pdf")
        sys.exit(1)
    
    dev_pdf = sys.argv[1]
    prod_pdf = sys.argv[2]
    
    try:
        comparator = PDFComparator(dev_pdf, prod_pdf)
        report_path = comparator.compare()
        
        print("\n" + "="*60)
        print("🎉 PDF Comparison Complete!")
        print("="*60)
        print(f"📊 Report: {report_path}")
        print("\nOpen the HTML file in your browser to view the comparison.")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        sys.exit(1)


if __name__ == "__main__":
    main()
