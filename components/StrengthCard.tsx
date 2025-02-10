interface StrengthCardProps {
    number: number
    title: string
  }
  
  export default function StrengthCard({ number, title }: StrengthCardProps) {
    return (
      <div class="group hover:bg-primary/5 transition-colors p-6 rounded-lg border border-border">
        <div class="text-4xl font-bold text-primary mb-2">#{number}</div>
        <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">{title}</h3>
      </div>
    )
  }