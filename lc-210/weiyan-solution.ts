function findOrder(numCourses: number, prerequisites: number[][]): number[] {
	const coursesNeeds = {};
	const followedCourses = {};
	for (let i=0; i<prerequisites.length; i++) {
			const [course, require] = prerequisites[i];
			coursesNeeds[course] = coursesNeeds[course] ? [...coursesNeeds[course], require] : [require];
			followedCourses[require] = followedCourses[require] ? [...followedCourses[require], course] : [course];
	}
	
	const q = [];
	for (let i=0; i<numCourses; i++) {
			if (!coursesNeeds[i]) q.push(i);
	}
	
	const ans = [];
	while(q.length > 0) {
			const course = q.pop();
			ans.push(course);
			
			const followedCoursesArr = followedCourses[course] || [];
			for (let i=0; i<followedCoursesArr.length; i++) {
					const c = followedCoursesArr[i];
					coursesNeeds[c].splice(coursesNeeds[c].indexOf(course), 1);
					if (coursesNeeds[c].length === 0) {
							q.push(c);
					}
			}
	}
	
	return ans.length === numCourses ? ans : [];
};
