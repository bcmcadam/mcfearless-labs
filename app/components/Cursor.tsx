"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
} from "react";

export function CursorGlow({ enabled = true }: { enabled?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 250}px, ${cy - 250}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 500,
        height: 500,
        pointerEvents: "none",
        zIndex: 2,
        background:
          "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)",
        filter: "blur(20px)",
        mixBlendMode: "screen",
      }}
    />
  );
}

type MagneticProps<T extends ElementType = "span"> = {
  children: ReactNode;
  strength?: number;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "as">;

export function Magnetic<T extends ElementType = "span">({
  children,
  strength = 18,
  as,
  ...rest
}: MagneticProps<T>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(x, y);
      const max = Math.max(r.width, r.height);
      if (d < max * 1.2) {
        el.style.transform = `translate(${(x / max) * strength}px, ${
          (y / max) * strength
        }px)`;
      } else {
        el.style.transform = "translate(0,0)";
      }
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };
    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  const Tag = (as || "span") as ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={{
        display: "inline-block",
        transition: "transform .25s cubic-bezier(.2,.7,.2,1)",
      }}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Tag>
  );
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
} & Record<string, unknown>;

export function Reveal({
  children,
  as,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const Tag = (as || "div") as ElementType;
  return (
    <Tag className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
