import { motion } from "framer-motion";

interface CarCardProps {
  name: string;
  year: string;
  fipePrice: number;
  ourPrice: number;
  image: string;
}

export const CarCard = ({ name, year, fipePrice, ourPrice, image }: CarCardProps) => {
  const profit = fipePrice - ourPrice;
  const profitPercent = Math.round((profit / fipePrice) * 100);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <motion.div
      className="card-car group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Profit Badge */}
        <div className="absolute top-4 right-4">
          <span className="profit-badge">
            +{profitPercent}% LUCRO
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{year}</p>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">FIPE:</span>
            <span className="price-old">{formatCurrency(fipePrice)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">KarCash:</span>
            <span className="price-new">{formatCurrency(ourPrice)}</span>
          </div>
        </div>

        {/* Profit highlight */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Seu Lucro:</span>
            <span className="text-gold font-display font-bold text-xl">
              {formatCurrency(profit)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
