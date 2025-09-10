'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-8 w-8 p-0 border-none bg-transparent hover:bg-transparent" 
      onClick={copyToClipboard}
    >
      {copied ? <Check className="h-4 w-4 text-cyan-300" /> : <Copy className="h-4 w-4 text-cyan-300" />}
    </Button>
  );
}
