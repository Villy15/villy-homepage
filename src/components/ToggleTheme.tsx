import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun } from 'react-icons/rx';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="default"
          size="icon"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        >
          {theme === 'dark' ? <RxMoon /> : <RxSun />}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
