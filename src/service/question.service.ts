const BASEURL = "http://localhost:7078/api"

class QuestionService {
  async getQuestions()
  {
    const response = await fetch(BASEURL + '/question');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    throw new Error(response.statusText);
  }
}

export default new QuestionService();
export { QuestionService };
