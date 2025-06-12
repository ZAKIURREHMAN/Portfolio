
function SkillBar({skill,per}) {
  return (
    <div className={`mt-2 border-2 border-green-600 w-[95%] `} >
        <label htmlFor="">
        <strong>{skill}</strong>
        </label>
        <div className={` mt-5 bg-slate-200 rounded-[10px] `} >
            <div className={` border-[6px] border-green-700 rounded-[10px] `} style={{width:`${per}%`}} ></div>
        </div>
    </div>
  ) 
}

export default SkillBar