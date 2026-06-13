export default function CourseCard({
  course,
  onRegister,
  registering,
  registered,
}) {
  const max = course.max_capacity ?? 0
  const taken = Math.min(course.current_registrations ?? 0, max)
  const remaining = Math.max(0, max - taken)
  const isFull = remaining <= 0
  const pct = max > 0 ? Math.round((taken / max) * 100) : 0
  const almostFull = !isFull && remaining <= Math.max(1, Math.ceil(max * 0.2))

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
          {isFull ? '已額滿' : almostFull ? `僅剩 ${remaining} 位` : `剩 ${remaining} 位`}
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

      {/* 報名進度條：視覺化已報名 / 上限 */}
      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
          <span>報名人數</span>
          <span>
            {taken}/{max}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className={
              'h-full rounded-full transition-all ' +
              (isFull
                ? 'bg-rose-400'
                : almostFull
                  ? 'bg-amber-400'
                  : 'bg-brand-500')
            }
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {registered ? (
        // 已報名：按鈕改成可點的「已報名」，導向個人專區查看 / 管理。
        <button
          onClick={() => onRegister(course)}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
        >
          <span>✓ 已報名</span>
          <span className="text-brand-500">·</span>
          <span className="font-medium">查看</span>
        </button>
      ) : (
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
      )}
    </div>
  )
}
