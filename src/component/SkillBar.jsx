
function SkillBar() {
  return (
    <div className={`mt-7 border-2 border-green-600 h-[300px] w-[75%] `} >
        <label htmlFor="">HTML</label>
        <div className={` mt-5 bg-slate-200 rounded-[10px] `} >
            <div className={` border-[6px] border-green-700 w-[70%] rounded-[10px] `} ></div>
        </div>
    </div>
  )
}

export default SkillBar