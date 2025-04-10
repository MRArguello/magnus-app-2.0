"use client";
import { Button } from '@/components/atoms/Button/Button';
import clsx from 'clsx';

export interface TableCellProps {
  /** Clase */
  clase: string;
  /** Horario */
  horario: string;
  /** Color */
  color: string;
}

/** TableCell to show Activities */
export const TableCell = ({
  clase,
  horario,
  color,
  ...props
}: TableCellProps) => {

  const mainStyle = 'flex flex-row lg:flex-col items-center w-full justify-between lg:justify-center lg:font-bold text-zinc-300 uppercase text-center text-sm lg:text-base font-roboto border-b-2 lg:border-0 pb-2 lg:pb-0'

  const claseStyle = clsx(
    'font-roboto p-1 text-sm',
    `lg:${color}`
  );

  return (

    <div
      className={mainStyle}
      {...props}
    >
      <p className='whitespace-nowrap'>{horario}</p>
      <p className={claseStyle}>{clase}</p>

      <Button label='anotarse' />
    </div>
  );
};
