export default function CourseCard({ course, onRegister, registering }) {
  const remaining = Math.max(
    0,
    (course.max_capacity ?? 0) - (course.current_registrations ?? 0),
  )
  const isFull = remaining <= 0

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-800">{course.title}</h3>
        <span
          className={
            'shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ' +
            (isFull
              ? 'bg-rose-100 text-rose-700'
              : 'bg-brand-100 text-brand-700')
          }
        >
          {isFull ? '已額滿' : `剩 ${remaining} 位`}
        </span>
      </div>

      <dl className="space-y-1.5 text-sm text-slate-600">
        <div className="flex gap-2">
          <dt className="w-12 shrink-0 text-slate-400">教練</dt>
          <dd>{course.coach || '—'}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-12 shrink-0 text-slate-400">地點</dt>
          <dd>{course.location || '—'}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-12 shrink-0 text-slate-400">時間</dt>
          <dd>{course.time || '—'}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-12 shrink-0 text-slate-400">學費</dt>
          <dd className="font-semibold text-slate-800">
            NT$ {Number(course.price ?? 0).toLocaleString()}
          </dd>
        </div>
      </dl>

      <button
        onClick={() => onRegister(course)}
        disabled={isFull || registering}
        className={
          'mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ' +
          (isFull
            ? 'cursor-not-allowed bg-slate-100 text-slate-400'
            : 'bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60')
        }
      >
        {isFull ? '名額已滿' : registering ? '處理中…' : '我要報名'}
      </button>
    </div>
  )
}
