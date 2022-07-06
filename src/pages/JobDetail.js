import React from 'react';
import '../index.css';
import { Row} from 'antd';
import {Typography,Grid,Divider,Card, CardActions, Button, CardContent} from '@mui/material';



const jobDetail = () => {
	// let receiver = window.opener["filter"];
	// let id = receiver.id;
	return (
		<>
			{/* <div>
				<div>{receiver.title}</div>
				<div>{receiver.company}</div>
				<div>{receiver.salary}</div>
				<div>{receiver.city}</div>
				<div>{receiver.tags}</div>
				<div>没定的数据写死</div>
			</div> */}
			<div style={{backgroundColor:'#4CE3C4'}}>
				<Row>
					<text style={{fontSize: "50px", color: '#ffffff',marginLeft:'30px',marginRight:'20px', marginBottom: '10px', marginTop:'10px'}}>岗位</text>
					<text style={{fontSize: "40px", color: '#FFD482',marginLeft:'30px',marginRight:'20px', marginBottom: '10px', marginTop:'20px', fontWeight:'revert'}}>月薪</text>
				</Row>

				<Row>
					<text style={{fontSize: "23px", color: '#ffffff',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}>上班频次</text>
					<text style={{fontSize: "23px", color: '#ffffff',marginLeft:'10px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}> | </text>
					<text style={{fontSize: "23px", color: '#ffffff',marginLeft:'10px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}>总时长</text>
					<text style={{fontSize: "23px", color: '#ffffff',marginLeft:'10px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}> | </text>
					<text style={{fontSize: "23px", color: '#ffffff',marginLeft:'10px',marginRight:'10px', marginBottom: '30px', marginTop:'10px'}}>学位要求</text>
				</Row>
			</div>
			
			<Grid container>
				<Grid item xs={8.5} style={{marginRight:'10px'}}>
					<Typography style={{fontSize: "23px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'20px', fontWeight:'bold'}}>
						职位描述
					</Typography>
					<Typography style={{fontSize: "15px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}>
					前端工程师是互联网时代软件产品研发中不可缺少的一种专业研发角色。 从狭义上讲，前端工程师使用HTML、CSS、JavaScript 等专业技能和工具将产品UI设计稿实现成网站产品，涵盖用户PC端、移动端网页，处理视觉和交互问题。 从广义上来讲，所有用户终端产品与视觉和交互有关的部分，都是前端工程师的专业领域。+Col（24栅格）来调整大体上的左右布局。
					</Typography>
					<Typography style={{fontSize: "18px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'20px'}}>
						【公司】
					</Typography>
					<Typography style={{fontSize: "15px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}>
						像类似这样的页面，就需要用到Layout布局下的所有组件：Header、Content、Footer、Sider，在Content里面需要运用Grid里的Row+Col（24栅格）来调整大体上的左右布局。
					</Typography>
					<Typography style={{fontSize: "18px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'20px'}}>
						【工作地点】
					</Typography>
					<Typography style={{fontSize: "15px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}>
						像类似这样的页面，就需要用到Layout布局下的所有组件：Header、Content、Footer、Sider，在Content里面需要运用Grid里的Row+Col（24栅格）来调整大体上的左右布局。
					</Typography>
					<Typography style={{fontSize: "18px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'20px'}}>
						【任职要求】
					</Typography>
					<Typography style={{fontSize: "15px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'10px'}}>
						像类似这样的页面，就需要用到Layout布局下的所有组件：Header、Content、Footer、Sider，在Content里面需要运用Grid里的Row+Col（24栅格）来调整大体上的左右布局。
					</Typography>
				</Grid>
				<Divider orientation="vertical" flexItem variant="middle"></Divider>
				<Grid item >
					<Typography style={{fontSize: "23px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'20px', fontWeight:'bold'}}>
						相似职位
					</Typography>
					<Card sx={{ minWidth: 350 , minHeight: 100}} style={{marginLeft:'30px',marginRight:'10px', marginBottom:'15px', backgroundColor:'#EDFCF9'}} variant="outlined">
						<CardContent>
							<Row>
								<Typography variant="h5" component="div" style={{marginRight:'50px'}}>
								岗位1 
								</Typography>
								<Typography style={{marginTop:'5px',color:"#F29F05", textAlign:'center'}}>月薪1</Typography>
							</Row>
							<Row>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>公司1</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>·</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>地点1</Typography>
							</Row>
						</CardContent>
						<CardActions>
							<Button size="small">了解更多</Button>
						</CardActions>
					</Card>
					<Card sx={{ minWidth: 350 , minHeight: 100}} style={{marginLeft:'30px',marginRight:'10px', marginBottom:'20px', backgroundColor:'#EDFCF9'}}>
						<CardContent>
							<Row>
								<Typography variant="h5" component="div" style={{marginRight:'50px'}}>
								岗位2
								</Typography>
								<Typography style={{marginTop:'5px',color:"#F29F05", textAlign:'center'}}>月薪2</Typography>
							</Row>
							<Row>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>公司2</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>·</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>地点2</Typography>
							</Row>
						</CardContent>
						<CardActions>
							<Button size="small">了解更多</Button>
						</CardActions>
					</Card>
					{/* <Divider ></Divider> */}
					<Typography style={{fontSize: "23px", color: '#595959',marginLeft:'30px',marginRight:'10px', marginBottom: '10px', marginTop:'20px', fontWeight:'bold'}}>
						面试经验
					</Typography>
					<Card sx={{ minWidth: 350 , minHeight: 100}} style={{marginLeft:'30px',marginRight:'10px', marginBottom:'15px', backgroundColor:'#EDFCF9'}}>
						<CardContent>
							<Row>
								<Typography variant="h5" component="div" style={{marginRight:'50px'}}>
								标题1
								</Typography>
							</Row>
							<Row>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>关键词1</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>·</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>关键词2</Typography>
							</Row>
						</CardContent>
						<CardActions>
							<Button size="small">了解更多</Button>
						</CardActions>
					</Card>
					<Card sx={{ minWidth: 350 , minHeight: 100}} style={{marginLeft:'30px',marginRight:'10px', marginBottom:'15px', backgroundColor:'#EDFCF9'}}>
						<CardContent>
							<Row>
								<Typography variant="h5" component="div" style={{marginRight:'50px'}}>
								标题2
								</Typography>
							</Row>
							<Row>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>关键词1</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>·</Typography>
								<Typography variant="body1" style={{marginRight:'10px', marginTop:'20px'}}>关键词2</Typography>
							</Row>
						</CardContent>
						<CardActions>
							<Button size="small">了解更多</Button>
						</CardActions>
					</Card>
					
				</Grid>
				
			</Grid>


		</>
			
	);
};

export default jobDetail;